export type ApplicationStatus=
|'interested'
|'applied'
|'screening'
|'interview'
|'offer'
|'rejected'

export type Contact={
    name:string,
    email?:string
}

export type Company={
    id:number,
    name:string,
    status:ApplicationStatus,
    website?:string,
    contact?:Contact
}
