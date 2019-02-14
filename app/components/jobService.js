import Job from "../models/job.js";

//PRIVATE
//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
  jobs: [
    new Job({ wage: 1000, title: 'Videographer for the day', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OKMGPEwkpPLTUBRL_YPjy_wUTSDgT7xHym1mTk-YlPMXEuXx', description: 'play with Peachfuzz' }),
    new Job({ wage: 10, title: 'Taco Bell', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3_QR4XbRr_eLXoOCL3Iox2W0fx4BGncPq1CY3ppkRsoSac7iag', description: 'Make a run for the border' }),
    new Job({ wage: 15, title: 'Phone Surveys and Appointment Setting', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdHWlJEtLx-EXftF_iwsC1HDUPYKgH8Km_RebfFqvnc7xeM2k', description: 'We need people' })
  ]
}


//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
  jobs: []
}


function setState(dataName, value) {
  _state[dataName] = value
  //FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
  _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class JobService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Jobs() {
    return _state.jobs
  }
  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _state.jobs.push(newJob)
    setState('jobs', _state.jobs)
  }
  deleteJob(id) {
    for (let i = 0; i < _state.jobs.length; i++) {
      let job = _state.jobs[i];
      if (job.id == id) {
        _state.jobs.splice(i, 1)
        break;
      }
    }
    setState('jobs', _state.jobs)
  }
}