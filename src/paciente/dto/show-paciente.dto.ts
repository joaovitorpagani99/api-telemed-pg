import { Role } from './../../Role/role.enum';
export class ShowPacienteDto {
  id: string;
  nome: string;
  email: string;
  cpf: number;
  rg: number;
  telefone: number;
  role: Role;
}
