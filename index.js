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


