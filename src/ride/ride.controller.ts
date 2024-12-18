import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { EstimateRouteInput } from 'src/models';

@Controller('ride')
export class RideController {
  constructor(private readonly teste: AppService) {}

  @Post('estimate')
  createEstimate(@Body() obj: EstimateRouteInput): string {
    const resRoute = this.teste.findRoute(obj);
    console.log(`resRoute: ${resRoute}`);
    return 'estimativa';
  }
}
