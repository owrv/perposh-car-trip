import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  private readonly apiUrl: string =
    this.configService.get<string>('GOOGLE_API_ROUTES');
  private readonly apikey: string =
    this.configService.get<string>('GOOGLE_API_KEY');

  async findRoute(requestBody: any) {
    const headers = {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': this.apikey,
      'X-Goog-FieldMask':
        'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline',
    };
    try {
      const response = await firstValueFrom(
        this.httpService.post(this.apiUrl, requestBody, { headers }),
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao chamar api do google routes: ${error}`);
      throw error;
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
