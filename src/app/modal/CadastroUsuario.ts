import { Postagem } from './Postagem';

export class CadastroUsuario{
    public idUsuario: number; 
    public nome: string;
    public telefone: string;
    public email: string;
    public senha: string;
    public foto: string;
    public descricao: string;
    public postagem: Postagem[];

   
}