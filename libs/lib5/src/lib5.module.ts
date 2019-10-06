import { Module } from '@nestjs/common';
import { Lib5Service } from './lib5.service';

@Module({
  providers: [Lib5Service],
  exports: [Lib5Service],
})
export class Lib5Module {}
