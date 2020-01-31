export class Comentario {

    private idComentario: number;
    private idPostagem: number;
    private texto: string;
    private dataComent: string;

    public getIdComentario(): number{
        return this.idComentario;
    }
    public setIdComentario(idComentario: number): void{
        this.idComentario = idComentario;
    }

    public getTexto(): string{
        return this.texto;
    }
    public setTexto(texto: string): void{
        this.texto = texto;
    }

    public getDataComent(): string{
        return this.dataComent;
    }
    public setDataComent(dataComent: string): void{
        this.dataComent = dataComent;
    }
}