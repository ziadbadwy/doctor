function getBotResponse(input) {
    //arabic
    
    if (input.search('حجز') > 0 || input.search('حجز') == 0) {
        return "يمكنك حجز موعد من قسم الحجز أو الاتصال بنا على 011297546214";
    } else if (input.search('\.\*سعر') > 0 || input.search('\.\*سعر') == 0) {
        return "الحشوات التجميلية: 1500 جنيه \ n" + "تقويم الأسنان: 10000 جنيه \ n" + "زراعة الأسنان: 500 جنيه \ n" + "لمزيد من المعلومات"
        + "اتصل بهذا الرقم 011297546214";
    }
    else if (input.search('\.\*كام') > 0 || input.search('\.\*كام') == 0) {
        return "الحشوات التجميلية: 1500 جنيه \ n" + "تقويم الأسنان: 10000 جنيه \ n" + "زراعة الأسنان: 500 جنيه \ n" + "لمزيد من المعلومات"
        + "اتصل بهذا الرقم 011297546214";
    }
 else if (input.search('\.\*اين') > 0 || input.search('\.\*اين') == 0) {
    return "موقعنا عباس العقاد - مدينة نصر - القاهرة";

}
  else if (input.search('\.\*فين') > 0 || input.search('\.\*فين') == 0) {
        return "موقعنا عباس العقاد - مدينة نصر - القاهرة";
    }
    else if (input.search('\.\*مكان') > 0 || input.search('\.\*مكان') == 0) {
        return "موقعنا عباس العقاد - مدينة نصر - القاهرة";
    }
    //Doctorali
    else if (input.search('\.\*علي') > 0 || input.search('\.\*علي') == 0) {
        return "الدكتور علي هو جراح أسنان وهو أيضًا طبيب محترف متخصص في طب الأسنان وتشخيص أمراض وحالات تجويف الفم والوقاية منها وعلاجها.";
    }
    else if (input.search('\.\*دكتور') > 0 || input.search('\.\*دكتور') == 0) {
        return "الدكتور علي هو جراح أسنان وهو أيضًا طبيب محترف متخصص في طب الأسنان وتشخيص أمراض وحالات تجويف الفم والوقاية منها وعلاجها.";
    }
    
    else if (input.search('\.\*مطور') > 0 || input.search('\.\*مطور') == 0) {
        return "my Name is : Ziad Badwy\n"+
        "iam a web developer \n"
        +"phone : 01129777595 \n"
        +"Email : ziadzamab@gmail.com";
    }
    else if (input.search('\.\*عملك') > 0 || input.search('\.\*عملك') == 0) {
        return "my Name is : Ziad Badwy\n"+
        "iam a web developer \n"
        +"phone : 01129777595 \n"
        +"Email : ziadzamab@gmail.com";
    }
     // Simple responses
     else if (input.search('\.\*هاي') > 0 || input.search('\.\*هاي') ==0) {
        return "هاي! ^_^";
    } else if (input.search('\.\*باي') > 0 || input.search('\.\*باي') == 0) {
        return "باي! ^_^";
    }
    else if (input.search('\.\*كيف حالك') > 0 || input.search('\.\*كيف حالك') == 0) {
        return "انا اتصممت عشان اخدم حضرتك ^_^";
    }
    else if (input.search('\.\*ازيك') > 0 || input.search('\.\*ازيك') == 0) {
        return "تمام الحمد لله و انت  ^_^";
    }  
    else if (input.search('\.\* عامل ايه') > 0 || input.search('\.\* عامل ايه') == 0) {
        return "تمام الحمد لله و انت  ^_^";
    }  
    else if (input.search('\.\*شكرا') > 0 || input.search('\.\*شكرا') == 0) {
        return "لا شكر علي واجب";
    }  
   
    else if (input.search('\.\*تسلم') > 0 || input.search('\.\*تسلم') == 0) {
        return "لا شكر علي واجب";
    }  
  
    
    //english
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
else if (input.search('\.\*oc') > 0 || input.search('\.\*oc') == 0) {
    return "Doctor Ali is a Dental Surgeon and also is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.";
}
else if (input.search('\.\*ly') > 0 || input.search('\.\*ly') == 0) {
    return "Doctor Ali is a Dental Surgeon and also is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.";
}
else if (input.search('\.\*octor') > 0 || input.search('\.\*octor') == 0) {
    return "Doctor Ali is a Dental Surgeon and also is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.";
}
else if (input.search('\.\*ly') > 0 || input.search('\.\*ly') == 0) {
    return "Doctor Ali is a Dental Surgeon and also is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.";
}


   

    // Simple responses
    else if (input.search('\.\*ello') > 0 || input.search('\.\*ello') ==0) {
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
    //search social
    else if (input.search('\.\*acebook') > 0 || input.search('\.\*acebook') == 0) {
        window.open("https://www.facebook.com/");
        return "ok";
      }  
      else if (input.search('\.\*nstagram') > 0 || input.search('\.\*nstagram') == 0) {
        window.open("https://www.instagram.com/");
        return "ok";
      }  
      //searchGoogle
      else if (input.search('\.\*earch') > 0 || input.search('\.\*earch') == 0) {
       let search="";
       let i =input.length-1;
       while(true){
           if(input[i]==" " && input[i-1]=="r"){ 
               if(input[i-2]=="o" &&input[i-3]=="f")
            break;
           }
           else{
            search = input[i] + search;
            i--;
           }
       }
       window.open("https://www.google.com/search?q="+search);
        return ok;
      }  
      else if (input.search('\.\*بحث') > 0 || input.search('\.\*بحث') == 0) {
        let search="";
        let i =input.length-1;
        while(true){
            if(input[i]==" " && input[i-1]=="ن"){ 
                if(input[i-2]=="ع")
             break;
            }
            else{
             search = input[i] + search;
             i--;
            }
        }
        window.open("https://www.google.com/search?q="+search);
         return ok;
       }  
    else {
        return "sorry I dont know You can call us on this number 011297546214 to know more about " +input;
    }
    
    
}