// 应用程序入口文件。用来创建 Nest 应用实例
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main文件中我们可以在项目监听前配置一个全局的api前缀
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 使用核心类 NestFactory 返回一个 接口对象
  app.setGlobalPrefix('api');
  await app.listen(9999); // 这里是默认设置的端口号
}
bootstrap();
