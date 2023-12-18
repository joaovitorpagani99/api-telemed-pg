import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ShowPacienteDto } from './dto/show-paciente.dto';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post('cadastro')
  public async create(
    @Body() createPacienteDto: CreatePacienteDto,
  ): Promise<ShowPacienteDto> {
    const paciente: ShowPacienteDto =
      await this.pacienteService.create(createPacienteDto);

    if (!paciente) {
      return;
    }

    return paciente;
  }

  @Get()
  public async findAll(): Promise<ShowPacienteDto[]> {
    const pacientes: ShowPacienteDto[] = await this.pacienteService.findAll();

    if (!pacientes) {
      return;
    }

    return pacientes;
  }

  @Get(':id')
  public async findById(@Param('id') id: string): Promise<ShowPacienteDto> {
    const paciente: ShowPacienteDto = await this.pacienteService.findById(id);

    if (!paciente) {
      return;
    }

    return paciente;
  }

  @Get()
  public async findByEmail(
    @Query('email') email: string,
  ): Promise<ShowPacienteDto> {
    const paciente: ShowPacienteDto =
      await this.pacienteService.findByEmail(email);

    if (!paciente) {
      return;
    }

    return paciente;
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ): Promise<ShowPacienteDto> {
    const paciente: ShowPacienteDto = await this.pacienteService.update(
      id,
      updatePacienteDto,
    );

    if (!paciente) {
      return;
    }

    return paciente;
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<string> {
    const message = await this.pacienteService.remove(id);
    if (!message) {
      return;
    }
    return message;
  }
}