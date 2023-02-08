import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';

import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './schemas/company.schema';

@Controller('company')
export class CompanyController {

    constructor(private readonly  companyService: CompanyService){}
    @Get()
    findAll(){
        return this.companyService.findAll()
    }

    @Post('create')
    createdCompany(@Body() createCompanyDto: CreateCompanyDto){
        return   this.companyService.create(createCompanyDto)
    }

    @Get(':id')
    getByIdCompany(@Param('id') id: string) {
        return this.companyService.getByIdCompany(id)
    }

    @Patch(':id')
    updateByIdCompany(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto): Promise<Company>{
        return this.companyService.updateByIdCompany(id, updateCompanyDto)
    }
}
