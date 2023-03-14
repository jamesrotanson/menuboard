import React, { useState, useEffect } from "react";
import '../App.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import RichTextEditor from '../components/RichTextEditor';
import Avatar from "./Avatar";
import Avatar1 from "../images/memoji-01.png"
import Avatar2 from "../images/memoji-02.png"
import AvatarGroup from "./AvatarGroup";
import RecipeModal from "./RecipeModal";

const MealCalendar = () => {
  const [events, setEvents] = useState(
    [
      { 
        title: "Miso soup",
        date: "2023-01-31", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Breakfast',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Miso_Soup_001.jpg'
        },
        editable: true, 
        daysOfWeek: [ 1, 2, 4, 6 ],
      },
      { 
        title: "Scrambled egg",
        date: "2023-02-01", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Breakfast',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Scrambed_eggs.jpg'
        },
        editable: true,
        daysOfWeek: [ 3,5,7 ],
      },
      { 
        title: "Chicken noodle",
        date: "2023-02-01", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Mi_ayam_jamur.JPG'
        },
        editable: true,
        daysOfWeek: [ 2, 4,7 ],
      },
      {
        title: "Fried rice",
        date: "2023-02-02", 
        backgroundColor: "white", 
        borderColor: "white", 
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Nasi_goreng_seafood.png'
        },
        editable: true
      },
      { 
        title: "Japanese Curry",
        date: "2023-02-03", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Katsu_curry_by_luckypines.jpg'
        },
        editable: true, 
      },
      { 
        title: "Sushi",
        date: "2023-01-30", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg'
        },
        editable: true, 
        daysOfWeek: [ 1 , 3 ],
      },
      { 
        title: "Salad",
        date: "2023-02-04", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Lunch',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg'
        },
        editable: true, 
      },
      { 
        title: "Sweet and sour pork",
        date: "2023-01-31", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Dinner',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Sweet-and-sour_pork.jpg'
        },
        editable: true, 
      },
      { 
        title: "Spaghetti",
        date: "2023-01-30", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Dinner',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Spaghetti_and_meatballs_1.jpg'
        },
        editable: true, 
        daysOfWeek: [ 5 , 6 ],
      },
      { 
        title: "Bibimbap",
        date: "2023-02-12", 
        backgroundColor: "white",
        borderColor: "white",
        extendedProps: {
          type: 'Dinner',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg'
        },
        editable: true, 
      },
      
    ]
  );


  const [showModal, setShowModal] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [activeRecipe, setActiveRecipe] = useState([])

  const handleDateClick = (recipe) => {
    // setEvents([...events, { title: "New Event", date: arg.dateStr }]);
    setShowModal(true);
    setActiveRecipe(recipe)
  };


  // OPEN RECIPE DETAIL
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const handleOpenRecipe = (recipe) => {
    setShowRecipeModal(true)
    setActiveRecipe(recipe)
  }

  const handleCancelRecipe = () => {
    setShowRecipeModal(false)
  }

  // const mobileCheck = () => {
  //   var check = false;
  //   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  //   return check;
  // }

  const [scheduledRecipe, setScheduledRecipe] = useState({
    start: "",
    end: "", 
    filledIn: false, 
  })

  const handleSelectRecipe = (recipe) => {
    console.log('Create')
    setScheduledRecipe({
      start: recipe.startStr,
      end: recipe.endStr,
      filledIn: true
    })
  }

  const renderEventContent = (recipe) => {
    return (
      <div className="Calendar-event" onClick={() => handleOpenRecipe(recipe)}>
        <img className="Calendar-event-thumbnail" src={recipe.event.extendedProps.imageUrl} alt="Recipe thumbnail"/>
        <div className="Calendar-event-info">
          <h4>{recipe.event.title}</h4>
          <small>{recipe.event.extendedProps.type}</small>
          {/* <AvatarGroup size="small"/> */}
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* RECIPE DETAIL */}
      {showRecipeModal &&
        <RecipeModal 
          onCancel={handleCancelRecipe}
          // name={activeRecipe.title}
          name={activeRecipe.event.title}
          imageUrl={activeRecipe.event.extendedProps.imageUrl} 
          plannedDate={activeRecipe.event.date}
        /> 
      }

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        // initialView={mobileCheck() ? "dayGridWeek" : "dayGrid"}
        initialView="dayGridWeek"
        events={events}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        headerToolbar={{
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        aspectRatio={2}
        select={handleSelectRecipe}
        editable={true}
        selectable={true}
        // dayMaxEvents={true}
      />
    </div>
   
  );
};

export default MealCalendar;