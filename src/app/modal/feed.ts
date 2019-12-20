export class Feed{
    private idPostagem: number;
    private titulo: string;
    private texto: string;
    private linkimg: string;
    private datainclusao: string;

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
}