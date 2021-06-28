import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exercises!: AngularFireList<any>;
  constructor(private database: AngularFireDatabase) { }
  rootRef = this.database.database.ref('/exercises');

  currentExercise!: Exercise;


  async getExerciseByKey(key: string): Promise<any>{
    let promise = new Promise((resolve,reject) =>{
      this.rootRef.child(key).once('value').then((snapshot) => {
        if(snapshot.val() !== null){
          resolve(snapshot.val());
        }
        else{
          reject("Exercise not found")
        }
      });
    });
    return promise;
  }

  saveNewExercise(exercise: Exercise){
    this.rootRef.push(exercise)
      .then(response => {
        let key: string = response['key']!;
        this.rootRef.child(key).child('code').set(key);
        console.log(response)
      }, 
      error => console.log(error));
  }

  updateExercise(exercise: Exercise, key: string){
    this.database.database.ref("exercises/"+ key).set(exercise).then(response => console.log("Sucess")).catch(err => console.log("Error"));
  }

  getExercises(){
    let promise = new Promise((resolve,reject) =>{
      this.database.list('exercises').snapshotChanges().subscribe(item => {
        let exercisesAndKey: any = [];
        item.forEach(element => {
          let x = {
            exercise : <Exercise>element.payload.toJSON(),
            key: element.key
          };
          exercisesAndKey.push(x);
        });
        if(exercisesAndKey.length !== 0){
          resolve(exercisesAndKey)
        }
        else{
          reject(exercisesAndKey)
        }
      });
    })
    return promise;
  }

  /*
  How to use getExercises in other components:

    exerciseService.getExercises.then((data)=>{
      this.exercises = data;
      // Code that uses this.exercises
      console.log(this.exercises);
    })

  */
}
