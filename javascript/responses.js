function getBotResponse(input) {
    if (input.search('appointment') > 0 || input.search('appointment') == 0) {
        return "you can make appointment from the Appointment Section or call us on 011297546214";
    } else if (input.search('price') > 0 || input.search('price') == 0) {
        return "Cosmetic fillings : 1500LE\n"+"Orthodontics : 10000LE\n"+"Dental Implants : 500LE \n"+"for more information "
        +"call this number 011297546214";
    }
  else if (input.search('location') > 0 || input.search('location') == 0) {
        return "our location is Abbas El akad - nasr City - Cairo";
    }
    else if (input.search('developer') > 0 || input.search('developer') == 0) {
        return "my Name is : Ziad Badwy\n"+
        "iam a web developer \n"
        +"phone : 01129777595 \n"
        +"Email : ziadzamab@gmail.com";
    }
   else if (input.search('Appointment') > 0 || input.search('Appointment') == 0) {
        return "you can make appointment from the Appointment Section or call us on 011297546214";
    }
 else if (input.search('Price') > 0 || input.search('Price') == 0) {
    return "Cosmetic fillings : 1500LE\n"+"Orthodontics : 10000LE\n"+"Dental Implants : 500LE \n"+"for more information "
    +"call this number 011297546214";
}
else if (input.search('Location') > 0 || input.search('Location') == 0) {
    return "our location is Abbas El akad - nasr City - Cairo";
}
else if (input.search('Developer') > 0 || input.search('Developer') == 0) {
    return "my Name is : Ziad Badwy\n"+
    "iam a web developer \n"
    +"phone : 01129777595 \n"
    +"Email : ziadzamab@gmail.com";
}
//doctor ali
else if (input.search('Ali') > 0 || input.search('Ali') == 0) {
    return "Doctor Ali is a Dental Surgeon and also is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.";
}
else if (input.search('ali') > 0 || input.search('ali') == 0) {
    return "Doctor Ali is a Dental Surgeon and also is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.";
}


   

    // Simple responses
    if (input.search('hello') > 0 || input.search('hello') == 0) {
        return "Hello there! ^_^";
    } else if (input.search('bye') > 0 || input.search('bye') == 0) {
        return "Talk to you later! ^_^";
    }
    else if (input.search('ezik') > 0 || input.search('ezik') == 0) {
        return "tmam elhmdullah wnta , ana msh bafhm gher english ^_^";
    }  
    else if (input.search('3aml eh') > 0 || input.search('3aml eh') == 0) {
        return "tmam elhmdullah wnta , ana msh bafhm gher english ^_^";
    }  
    else if (input.search('eh') > 0 || input.search('eh') == 0) {
        return "tmam elhmdullah wnta , ana msh bafhm gher english ^_^";
    }  
    else if (input.search('Hello') > 0 || input.search('Hello') == 0) {
        return "Hello there! ^_^";
    } else if (input.search('Bye') > 0 || input.search('Bye') == 0) {
        return "Talk to you later! ^_^";
    }
    else if (input.search('Ezik') > 0 || input.search('Ezik') == 0) {
        return "tmam elhmdullah wnta , ana msh bafhm gher english ^_^";
    }  
    else if (input.search('3aml eh') > 0 || input.search('3aml eh') == 0) {
        return "tmam elhmdullah wnta , ana msh bafhm gher english ^_^";
    }  
    else if (input.search('Eh') > 0 || input.search('Eh') == 0) {
        return "tmam elhmdullah wnta , ana msh bafhm gher english ^_^";
    }  
    else if (input.search('hi') > 0 || input.search('hi') == 0) {
        return "hi you can ask me about any thing ^_^";
    }  
    else if (input.search('Hi') > 0 || input.search('Hi') == 0) {
        return "hi you can ask me about any thing ^_^";
    }  
    else if (input.search('thank') > 0 || input.search('thank') == 0) {
        return "you are welcome ^_^";
    }  
    else {
        return "You can call us on this number 011297546214 to know more about " +input;
    }
}