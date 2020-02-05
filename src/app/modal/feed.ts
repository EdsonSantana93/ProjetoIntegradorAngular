import { Usuario } from './Usuario';

export class Feed{

    
    public idPostagem: number; 
    /*private idUsuario: number; //id que deve ser setado com o id que vier do usuario.ts*/
    public titulo: string; //titulo inexistente.
    public texto: string;
    public linkimg: string = "https://www.google.com/search?rlz=1C1GCEA_enBR868BR874&biw=1366&bih=625&tbm=isch&sa=1&ei=gP4pXpHNFL6g5OUPjMujOA&q=imagem+de+perfil+sem+foto&oq=imagem+de+perfil+sem+foto&gs_l=img.3...8737.9661..10201...0.0..0.92.644.8......0....1..gws-wiz-img.fstPO5a-xQM&ved=0ahUKEwiRjYe9xJrnAhU-ELkGHYzlCAcQ4dUDCAc&uact=5#imgrc=3EbDfOoL4rYWhM:"; //essa imagem da classe feed não tem funcionalidade
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

    /*public getIdUsuario(): number{
        return this.idPostagem;
    }*/

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

    public getLinkimg(): string{
        return this.linkimg;
    }
    public setLinkimg(linkimg: string): void{
        this.linkimg = linkimg;
    }

    public getDatainclusao(): string{
        return this.datainclusao
    }
    public setDatainclusao(datainclusao: string): void{
        this.datainclusao = datainclusao;
    }
    
    /*public getComentario(): string{
        return  this.comentario
    }
    public setComentario(comentario : string): void{
        this.comentario=comentario;
    }*/
    
    /*public getLike(): number{
        return this.like
    }
    public setLike(like : number): void{
        this.like = like;
    }*/

}