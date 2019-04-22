export interface Customer {
    ClientId: number;
    ClientName: string;
    ClientAddress: string;
    ClientCode: string;
    ClientType: string;
    ClientOPBalance: string;
    Remarks: string;
    ClientSub: [ClientSub];
}
interface ClientSub {
    ClientId: number;
    ClientPhone: string;
    ClientEmail: string;
}
