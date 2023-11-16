// In mediator pattern the objects will communicate through each other through a mediater interface. They
// Won't perform communication directily.

class Mediator {
  constructor() {
    this.participants = [];
  }

  addParticipantToMediator(participant) {
    // setting the current instance of mediator to the participant
    participant.setMediater(this);
    // we are adding participant object to the mediator
    this.participants.push(participant);
  }

  broadCastMessage(senderParticipant, message) {
    this.participants.forEach((receiver) => {
      if (receiver !== senderParticipant) {
        senderParticipant.NotifyParticipants(
          senderParticipant,
          message,
          receiver
        );
      }
    });
  }
}

class Participant {
  constructor(name) {
    this.name = name;
    this.mediaterInterface = null;
  }
  setMediater(mediaterInterface) {
    this.mediaterInterface = mediaterInterface;
  }
  sendMessage(message) {
    this.mediaterInterface.broadCastMessage(this, message);
    // this.mediatorInterface.broadCastMessage(this, message);
  }
  NotifyParticipants(FROM, MSG, TO) {
    console.log(`${FROM.name} sent a Message : ${MSG} to ${TO.name}`);
  }
}

let p1 = new Participant('Preetam');
let p2 = new Participant('Varun');
let p3 = new Participant('Gorle');

let m = new Mediator();

m.addParticipantToMediator(p1);
m.addParticipantToMediator(p2);
m.addParticipantToMediator(p3);

p2.sendMessage('Hi there everyone!!!');
