import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/user/schemas/User.chema';
import { UserService } from 'src/user/user.service';
import { LoginResponseDto } from './DTO/LoginResponseDto.dto';

@Injectable()
export class AuthService {
  @Inject()
  private readonly userService: UserService;

  @Inject()
  private readonly jwtService: JwtService;

  async validateUser(username: string, password: string): Promise<UserDocument | null | undefined> {
    const user = await this.userService.getByUserName(username);
    if (user?.password === password) return user;
  }

  async login(user: UserDocument): Promise<LoginResponseDto> {
    const accessToken = this.jwtService.sign({
      username: user.username,
      id: user._id.toString(),
      roleId: user.roleId,
    });
    return new LoginResponseDto(accessToken, accessToken);
  }
}
