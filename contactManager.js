contacts = [];

const displayContacts = () => {
  if (contacts.length === 0) {
    console.log("Your contact list empty");
  } else {
    contacts.forEach((contact, index) => {
      console.log(
        `${index + 1}.Name: ${contact.name}, Phone: ${contact.phone}, Email: ${
          contact.email
        }`
      );
    });
  }
};
const add = ({ name, phone, email }) => {
  contacts.push({ name, phone, email });
  console.log("contact added successfully");
};

const deleteContacts = (info) => {
  let flag = false;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === info) {
      const permission = prompt(
        "Do you really want to delete this contact (y/n):"
      );
      if (permission === "y") {
        const deletedContact = contacts.splice(i, 1);
        console.log(`${deletedContact[0].name} is deleted successfully`);
        flag = true;
        break;
      }
    }
  }
  if (!flag) {
    console.log("contact not found");
  }
 displayContacts();
};

const userInput = () => {
  while (true) {
    const user = prompt(
      "press + to add new contact, '-' to delete  contact,  'show' to display the contact list and 'exit' to quit: "
    );

    if (user === "+") {
      const newName = prompt("Enter the name: ");
      const newPhone = prompt("Enter the phone: ");
      const newEmail = prompt("Enter the email: ");

      if (newName && newPhone && newEmail) {
        add({ name: newName, phone: newPhone, email: newEmail });
        displayContacts();
      } else {
        console.log("All fields (name, phone, email) are required.");
      }
    } else if (user === "show") {
      displayContacts();
    } else if (user === "-") {
      const info = prompt("enter the name  of the contact to delete: ");
      if (info) {
        deleteContacts(info);
      }
    } else if (user === "exit") {
      const confirmExit = prompt("Do you really want to quit? (y/n):");
      if (confirmExit === "y") {
        console.log("Exiting...");
        break;
      }
    } else {
      console.log("Invalid command. Please try again.");
    }
  }
};
userInput();

