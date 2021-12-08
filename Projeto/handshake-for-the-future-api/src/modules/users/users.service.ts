import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserType } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.findByEmail(createUserDto.email);
    this.validUserAlreadyExists(userExists);
    const user = await this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
  }

  findAll({ userType }) {
    if (!Object.values(UserType).includes(userType)) {
      throw new BadRequestException(`${userType} not is valid user type`);
    }
    const users = this.userRepository.find({ userType: userType });
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    const updatedUser = await this.userRepository.save({
      ...user,
      ...updateUserDto,
    });
    return updatedUser;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ email });
    return user;
  }

  validUserAlreadyExists(user: User) {
    if (user) {
      throw new ConflictException('User already exists');
    }
  }
}
