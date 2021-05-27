import { IsNumber, IsString } from 'class-validator';
 
class CreateProductDto {

    public constructor(){}

    @IsString()
    public location_name: string;
    
    @IsString()
    public catalog_name: string
    
    @IsString()
    public color: string;

    @IsString()
    public size: string;

    @IsNumber()
    public number: number;


}


export default CreateProductDto;