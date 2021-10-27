function getBotResponse(input) {
    if (input.search('\.\*ppointment') > 0 || input.search('\.\*ppointment') == 0) {
        return "you can make appointment from the Appointment Section or call us on 011297546214";
    } else if (input.search('\.\*rice') > 0 || input.search('\.\*rice') == 0) {
        return "Cosmetic fillings : 1500LE\n"+"Orthodontics : 10000LE\n"+"Dental Implants : 500LE \n"+"for more information "
        +"call this number 011297546214";
    }
    else if (input.search('\.\*ush') > 0 || input.search('\.\*ush') == 0) {
        return "Cosmetic fillings : 1500LE\n"+"Orthodontics : 10000LE\n"+"Dental Implants : 500LE \n"+"for more information "
        +"call this number 011297546214";
    }
 else if (input.search('\.\*here') > 0 || input.search('\.\*here') == 0) {
    return "our location is Abbas El akad - nasr City - Cairo";

}
  else if (input.search('\.\*ocation') > 0 || input.search('\.\*ocation') == 0) {
        return "our location is Abbas El akad - nasr City - Cairo";
    }
    else if (input.search('\.\*eveloper') > 0 || input.search('\.\*eveloper') == 0) {
        return "my Name is : Ziad Badwy\n"+
        "iam a web developer \n"
        +"phone : 01129777595 \n"
        +"Email : ziadzamab@gmail.com";
    }
  
//doctor ali
else if (input.search('\.\*li') > 0 || input.search('\.\*li') == 0) {
    return "Doctor Ali is a Dental Surgeon and also is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.";
}
else if (input.search('\.\*ly') > 0 || input.search('\.\*ly') == 0) {
    return "Doctor Ali is a Dental Surgeon and also is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.";
}


   

    // Simple responses
    if (input.search('\.\*ello') > 0 || input.search('\.\*ello') ==0) {
        return "Hello there! ^_^";
    } else if (input.search('\.\*ye') > 0 || input.search('\.\*ye') == 0) {
        return "Talk to you later! ^_^";
    }
    else if (input.search('\.\*ow \.\*re \.\*ou') > 0 || input.search('\.\*ow \.\*re \.\*ou') == 0) {
        return "iam developed to serve you ^_^";
    }
    else if (input.search('\.\*z\.\*k') > 0 || input.search('\.\*z\.\*k') == 0) {
        return "tmam elhmdullah wnta , ana msh bafhm gher english ^_^";
    }  
    else if (input.search('\.\* eh') > 0 || input.search('\.\* eh') == 0) {
        return "tmam elhmdullah wnta , ana msh bafhm gher english ^_^";
    }  
    else if (input.search('hi') > 0 || input.search('hi') == 0) {
        return "hi you can ask me about any thing ^_^";
    }  
    else if (input.search('Hi') > 0 || input.search('Hi') == 0) {
        return "hi you can ask me about any thing ^_^";
    }  
    else if (input.search('\.\*hank') > 0 || input.search('\.\*hank') == 0) {
        return "you are welcome ^_^";
    }  
    else {
        return "sorry I dont know You can call us on this number 011297546214 to know more about " +input;
    }
}