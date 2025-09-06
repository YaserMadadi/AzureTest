
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Client } from '../client';
import { Gender } from '../gender';
import { WeightUnit } from '../weightUnit';

import { Booking } from '../booking';
import { PetBehavior } from '../petBehavior';
import { PetMedicalCondition } from '../petMedicalCondition';



export class Pet extends BaseEntity implements IBaseEntity<Pet> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Pet.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'pet', 'Pet');

  //endregion

  //#region Fields

	public client?: Client = new Client();
	
	public name: string = '';
	
	public gender?: Gender = new Gender();
	
	public breed: string = '';
	
	public weight: number = 0;
	
	public weightUnit?: WeightUnit = new WeightUnit();
	
	public color: string = '';
	
	public dateOfBirth?: Date = new Date();
	
	public profilePicture: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfBooking: Booking[] = [];
	
	public listOfPetBehavior: PetBehavior[] = [];
	
	public listOfPetMedicalCondition: PetMedicalCondition[] = [];

  //#endregion

  public static Validate(pet: Pet) : boolean {
    let result = 
      Validator.Validate(pet.client) &&
		Validator.Validate(pet.name) &&
		Validator.Validate(pet.gender) &&
		Validator.Validate(pet.breed) &&
		Validator.Validate(pet.weightUnit) &&
		Validator.Validate(pet.color) &&
		Validator.Validate(pet.dateOfBirth) &&
		Validator.Validate(pet.profilePicture);

    if(result === false)
      console.log('Pet is unvalid : ', pet);

    return result;
  }
}
