import { Usuario } from './Usuario';

export class Feed{

    
    public idPostagem: number; 
    public idUsuario: number; 
    public titulo: string; //titulo inexistente.
    public texto: string;
    public datainclusao: string;
    public usuario: Usuario;
    /*private comentario : string;*/
    /*private like: number; //sem uso*/
    
    

    public getIdPostagem(): number{
        return this.idPostagem;
    }
    public setIdPostagem(idPostagem: number): void{
        this.idPostagem = idPostagem;
    }

    public getTitulo(): string{
        return this.titulo;
    }
    public setTitulo(titulo: string): void{
        this.titulo = titulo;
    }

    public getTexto(): string{
        return this.texto;
    }
    public setTexto(texto:string): void{
        this.texto = texto;
    }

    public getDatainclusao(): string{
        return this.datainclusao
    }
    public setDatainclusao(datainclusao: string): void{
        this.datainclusao = datainclusao;
    }
}