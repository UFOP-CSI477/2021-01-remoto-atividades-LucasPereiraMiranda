import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';
import { Category } from '../categories/entities/category.entity';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { Startup } from './entities/startup.entity';

@Injectable()
export class StartupsService {
  constructor(
    @InjectRepository(Startup)
    private startupRepository: Repository<Startup>,
    @Inject(CategoriesService)
    private categoriesService: CategoriesService,
  ) {}

  async create(createStartupDto: CreateStartupDto) {
    const startupExists = await this.startupRepository.findOne({
      name: createStartupDto.name,
    });
    if (startupExists) {
      throw new ConflictException(
        `Startup with name ${createStartupDto.name} already exists`,
      );
    }

    const savedStartup = await this.startupRepository.save({
      ...createStartupDto,
      categories: await this.getCategoriesToDefineInStartup(
        createStartupDto.categoryIds,
      ),
    });
    return savedStartup;
  }

  async findAll() {
    const startups = await this.startupRepository.find();
    return startups;
  }

  async findOne(id: number) {
    const startup = await this.startupRepository.findOne(id);
    if (!startup) {
      throw new NotFoundException(`Startup with ID "${id}" not found`);
    }
    return startup;
  }

  async update(id: number, updateStartupDto: UpdateStartupDto) {
    const startup = await this.startupRepository.findOne(id);
    const updatedStartup = await this.startupRepository.save({
      ...startup,
      ...updateStartupDto,
    });
    return updatedStartup;
  }

  async getCategoriesToDefineInStartup(
    categoryIds: string[],
  ): Promise<Category[]> {
    const categories = [];
    for (const categoryId of categoryIds) {
      const category = await this.categoriesService.findOneById(+categoryId);
      categories.push(category);
    }
    return categories;
  }
}
