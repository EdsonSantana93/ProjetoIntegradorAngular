export class FaleConosco {
    
    public idFaleConosco: number;
    public nome: string;
    public email: String;
    public telefone: string;
    public msg: string;
    

    public getIdFaleConosco(): number{
        return this.idFaleConosco;
    }
    public setIdComentario(idFaleConosco: number): void{
        this.idFaleConosco = idFaleConosco;
    }

    public getNome(): string{
        return this.nome;
    }
    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getTelefone(): string{
        return this.telefone;
    }
    public setTelefone(telefone: string): void{
        this.telefone = telefone;
    }

    public getMensagem(): string{
        return this.msg;
    }
    public setMensagem(mensagem: string): void{
        this.msg = mensagem;
    }

    
}