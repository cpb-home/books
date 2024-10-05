import { Module } from '@nestjs/common';
import { BooksServiceController } from './BooksService.controller';
import { BooksService } from './BooksService.service';

@Module({
  controllers: [BooksServiceController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksServiceModule {}
