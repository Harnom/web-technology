import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHandlingComponent } from './recipe-handling.component';

import { FormsModule } from '@angular/Forms';


describe('RecipeHandlingComponent', () => {
  let component: RecipeHandlingComponent;
  let fixture: ComponentFixture<RecipeHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeHandlingComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('New Recipe', () => {
    const compiled = fixture.debugElement.nativeElement;
    let button =  compiled.querySelector('#newRecipe');

    button.click();
    fixture.detectChanges();

    let ingredient: HTMLInputElement =  compiled.querySelector('input[name="ingredient"]');
    let ingredient1 =  compiled.querySelector('input[name="ingredient1"]');
    // console.log(ingredient.value);
    expect(ingredient.value).toBe('');
  });

  it('Add Ingredient', () => {
    const compiled = fixture.debugElement.nativeElement;
    let newRecipe =  compiled.querySelector('#newRecipe');

    newRecipe.click();
    fixture.detectChanges();
    let addIngredient =  compiled.querySelector('#addIngredient');
    console.log("Add Ingredient: ", addIngredient);
    addIngredient.click();
    fixture.detectChanges();
    let ingredient: HTMLInputElement =  compiled.querySelector('#ingredient');
    let quantity: HTMLInputElement =  compiled.querySelector('#quantity');

    let ingredient0: HTMLInputElement =  compiled.querySelector('#ingredient0');
    let quantity0: HTMLInputElement =  compiled.querySelector('#quantity0');

    console.log("Ingredient 0: ", ingredient0);
    console.log("Quantity 0: ", quantity0);
    addIngredient.click();
    fixture.detectChanges();

    expect(ingredient.value).toEqual("");
    expect(quantity.value).toEqual("");
  });

  it('Add Instruction', () => {
    const compiled = fixture.debugElement.nativeElement;
    let newRecipe =  compiled.querySelector('#newRecipe');


    newRecipe.click();
    fixture.detectChanges();
    let addInstruction =  compiled.querySelector('#addInstruction');
    // console.log("Add Instruction: ", addInstruction);
    let instruction0: HTMLInputElement =  compiled.querySelector('input[name="instruction0"]');
    // instruction0 = "Instruction1";
    addInstruction.click();
    fixture.detectChanges();
    let instruction: HTMLInputElement =  compiled.querySelector('input[name="instruction"]');
    // instruction = "Instruction1"


    // console.log(ingredient.value);
    // expect(ingredient).toBe();
    expect(instruction.value).toEqual("");
  });

  it('Set Estimated Time', () => {
    const compiled = fixture.debugElement.nativeElement;
    let newRecipe =  compiled.querySelector('#newRecipe');

    newRecipe.click();
    fixture.detectChanges();
    let setEstimatedTime =  compiled.querySelector('#setEstimatedTime');
    setEstimatedTime.click();
    fixture.detectChanges();
    let estimatedTime: HTMLInputElement =  compiled.querySelector('#estimatedTime');

    expect(estimatedTime.value).toEqual("");
  });



  it('Deleting Recipe', () => {
    const compiled = fixture.debugElement.nativeElement;
    let radio =  compiled.querySelector('#radioButton0');
    let deleteButton =  compiled.querySelector('#deleteRecipe');

    // console.log(deleteButton);
    radio.click();
    deleteButton.click();
    fixture.detectChanges();
    let radio =  compiled.querySelector('#radioButton0');
    // console.log("Radio",radio);


    // console.log(radio);
    expect(radio).toBe(null);
    // expect(component.ingredient0).toBe(0);
  });

  it('All together', () => {
    const compiled = fixture.debugElement.nativeElement;

    //New Recipe
    let newRecipe =  compiled.querySelector('#newRecipe');

    newRecipe.click();
    fixture.detectChanges();

    //New Ingredient
    let addIngredient =  compiled.querySelector('#addIngredient');
    console.log("Add Ingredient: ", addIngredient);
    addIngredient.click();
    fixture.detectChanges();
    let ingredient: HTMLInputElement =  compiled.querySelector('#ingredient');
    let ingredient0: HTMLInputElement =  compiled.querySelector('#ingredient0');
    let quantity: HTMLInputElement =  compiled.querySelector('#quantity');
    let quantity0: HTMLInputElement =  compiled.querySelector('#quantity0');

    console.log("Ingredient 0: ", ingredient0);
    console.log("Quantity 0: ", quantity0);
    addIngredient.click();
    fixture.detectChanges();

    expect(ingredient.value).toEqual("");
    expect(quantity.value).toEqual("");

    //New Instruction
    let addInstruction =  compiled.querySelector('#addInstruction');
    let instruction0: HTMLInputElement =  compiled.querySelector('input[name="instruction0"]');
    addInstruction.click();
    fixture.detectChanges();
    let instruction: HTMLInputElement =  compiled.querySelector('input[name="instruction"]');

    expect(instruction.value).toEqual("");

    //New Estimated Time
    let setEstimatedTime =  compiled.querySelector('#setEstimatedTime');
    setEstimatedTime.click();
    fixture.detectChanges();
    let estimatedTime: HTMLInputElement =  compiled.querySelector('#estimatedTime');

    expect(instruction.value).toEqual("");


    let setEstimatedTime =  compiled.querySelector('#setEstimatedTime');
    setEstimatedTime.click();
    fixture.detectChanges();
    let estimatedTime: HTMLInputElement =  compiled.querySelector('#estimatedTime');

    expect(instruction.value).toEqual("");

    //Saving New Recipe
    let saveRecipe =  compiled.querySelector('#saveRecipe');

    saveRecipe.click();
    fixture.detectChanges();

    //Deleting Recipe
    let radio =  compiled.querySelector('#radioButton1');
    let deleteButton =  compiled.querySelector('#deleteRecipe');

    radio.click();
    deleteButton.click();
    fixture.detectChanges();
    let radio =  compiled.querySelector('#radioButton1');

    expect(radio).toBe(null);

  });

  // it('Add Instruction', () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   let radio =  compiled.querySelector('#radioButton0');
  //   let instructionInput =  compiled.querySelector('#instruction');
  //
  //   // console.log(instructionInput);
  //   radio.click();
  //   fixture.detectChanges();
  //   let radio =  compiled.querySelector('#radioButton0');
  //   // console.log("Instruction: ",instructionInput);
  //
  //   let ingredient: HTMLInputElement =  compiled.querySelector('input[name="ingredient"]');
  //   let ingredient1: HTMLInputElement =  compiled.querySelector('input[name="ingredient1"]');
  //   // console.log(radio);
  //   expect(ingredient.value).toBeEquals(null);
  //   // expect(component.ingredient0).toBe(0);
  // });
});
