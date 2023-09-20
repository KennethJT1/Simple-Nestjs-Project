import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.schema';
import { UpdateUserDto } from './user.update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }

  @Get()
  async allUser() {
    return this.appService.allUsers();
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.appService.updateUsers(id, data);
  }

  @Delete(':id')
  async deleteUsers(@Param('id') id: string) {
    return this.appService.deleteUsers(id);
  }
}
