import { Role } from "src/Role/role.enum";

export class UpdatePacienteDto {
  nome?: string;
  email?: string;
  senha?: string;
  cpf?: number;
  rg?: number;
  telefone?: number;
  role?: Role;
}
