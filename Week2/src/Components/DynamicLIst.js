import React, { Component } from 'react'

export class DynamicLIst extends Component {
    constructor() {
        super()
    
        this.state = {
             todos:[
                {
                    id: 1,
                    description: "Get out of bed",
                    deadline: "2017-09-11",
                    done: true
                },
                {
                    id: 2,
                    description: "Brush teeth",
                    deadline: "2017-09-10",
                    done: false
                },
                {
                    id: 3,
                    description: "Eat breakfast",
                    deadline: "2017-09-09",
                    done: false
                }
             ]
             

            
        }
        this.Adding = this.Adding.bind(this);
        this.Deleting = this.Deleting.bind(this);

       
    }
    Adding(event){
        event.preventDefault();
        const AddingNewTodo = {
            id: this.state.todos,
            description: event.target.description.value,
            deadline: event.target.deadline.value,
            done: false
        }
        this.setState({todos: this.state.todos.concat(AddingNewTodo)})
    };

    Deleting(id) {
        this.setState((prevState) =>({
         todos: prevState.todos.filter(item => item.id !== id )
        }))
    }
    
    render() {
        return (
            <div>
               <div>
                 <form onSubmit = {this.Adding}>
                   <input type="text" placeholder="Write What you want" name="description"></input>
                   <input type="date" placeholder="Write Deadline Please" name= "deadline"></input>
                   <input type="submit" value="Submit"></input>
                 </form>   
                </div> 
                {this.state.todos.map((thingsOnMylist)=>
                   <div className="ThingsonList" key={thingsOnMylist.id}>
                        <p>{thingsOnMylist.description} / {thingsOnMylist.deadline} </p>
                        <button onClick={() => this.Deleting(thingsOnMylist.id)}>EraseEverything</button>
 
                   </div>
                )}
            </div>
        )
    }
}

export default DynamicLIst
