
export interface Usuario {
    nombre: string;
    correo: string;
    cedula: number;
    valorSolicitado: number;
    fechaPagar?: Date;
    estadoCredito: boolean;
    pagoCredito: PagoCreditop;
}


export enum PagoCreditop {
    no,
    si
}

export interface Prestamo {
    id: number;
    valor: number;
    pagada: boolean;
    createAt?: Date;
    usuario: Usuario;
}