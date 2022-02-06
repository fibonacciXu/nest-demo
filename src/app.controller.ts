// 带有单个路由的基本控制器示例
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user') // 控制器设置路由前缀 我理解为局部路由
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('find') // 方法装饰器设置路由路径 这里我理解为设置api子路由
  getHello(): string {
    return this.appService.getHello();
  }
}
