import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    await this.validCategoryByName(createCategoryDto.name);
    const newCategory = await this.categoryRepository.save(createCategoryDto);
    return newCategory;
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findOneById(id: number) {
    const category = await this.categoryRepository.findOne(id);
    if (!category) {
      throw new NotFoundException('category not found');
    }
    return category;
  }

  private async validCategoryByName(name: string) {
    const category = await this.categoryRepository.findOne({ name });
    if (category) {
      throw new ConflictException(`Category with name ${name} already exists`);
    }
  }
}
