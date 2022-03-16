var i = 0;

function postFunction()
{
    var text = document.getElementById("text1").value;
    if (i==0)
    {
        if(text =="")
        {
            alert("Type something!");
            return false;
        }
        else
        {
            document.getElementById("topic1").innerHTML = text;
            i++;
        }
    }


    else if(i == 1)
    {
        if(document.getElementById("text1").value == "")
        {
           alert("Type something!");
           return false; 
        }
        else
        {
            document.getElementById("comment1").innerHTML = text;
            i++;
        }
    }

    else if(i == 2)
    {
        if(document.getElementById("text1").value == "")
        {
            alert("Type something!");
            return false;
        }
        else
        {
            document.getElementById("comment2").innerHTML = text;
            i++;
        }
    }
    else
    {
        return null;
    }
    document.getElementById("text1").value = "";
}

function clearFunction()
{
    i = 0;
    document.getElementById("topic1").innerHTML = null;
    document.getElementById("comment1").innerHTML = null;
    document.getElementById("comment2").innerHTML = null;
    document.getElementById("text1").value = "";
}