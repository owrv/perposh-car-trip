import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Payload } from 'src/models';

@Controller('ride')
export class RideController {
  constructor(private readonly teste: AppService) {}

}
