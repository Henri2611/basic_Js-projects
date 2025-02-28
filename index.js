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

