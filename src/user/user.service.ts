// 创建一个 user service服务文件
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findUser(sid: string): string {
    console.log(sid);
    if (sid === '123456') {
      return 'kid is here';
    }
    return 'No one here';
  }

  setUser(sid: string, body: any): any {
    if (sid === '123456') {
      return {
        msg: '设置成功',
        body,
      };
    }
  }

  updateUser(sid: string, body: any): any {
    if (sid === '123456') {
      return {
        msg: '设置成功',
        body,
      };
    }
  }

  deleteUser(sid: string): any {
    if (sid === '123456') {
      return {
        msg: '删除成功',
      };
    }
  }
}
