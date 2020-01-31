export class perfilUsuario {

    private idUsuario: number; //virá também do Usuario.ts
    private fotoPerfil: string;
    private descricao: string;

    public getIdUsuario(): number{
        return this.idUsuario;
    }

    public getFotoPerfil(): string{
        return this.fotoPerfil;
    }
    public setFotoPerfil(fotoPerfil: string): void{
        this.fotoPerfil = fotoPerfil;
    }

    public getDescricao(): string{
        return this.descricao;
    }

    public setDescricao(descricao: string): void{
        this.descricao = descricao;
    }
}