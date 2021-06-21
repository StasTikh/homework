
for(let simple=3; simple<=1000; simple++){

        var isSimple = true;

        for(let check = 2; check < simple; check++){
            if(simple % check == 0 && simple != check){
                isSimple = false;
            }
        }
        if(isSimple == true){
            document.writeln(simple);
        }
    }