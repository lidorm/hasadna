export interface User{
    first_name: string; 
    last_name: string;
    email: string;
    project: string;
    image_url?: string
    registered?: Date;
    active: boolean;
}