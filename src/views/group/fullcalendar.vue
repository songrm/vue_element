<template>
  <div class="">
    <el-alert title="npm install vue-fullcalendar" type="success"></el-alert>
    <div
      class=""
      style="padding:10px;border-left:5px solid #da5959;background-color:#fbfbfb"
    >
      {{ show_data }}
    </div>
    <fullcalendar
      :events="fcEvents"
      @changeMonth="changeMonth"
      @eventClick="eventClick"
      @dayClick="dayClick"
      @moreClick="moreClick"
      style="max-width:1500px"
    ></fullcalendar>
  </div>
</template>
<script>
import fullcalendar from "vue-fullcalendar";
var demoEvents = [
  {
    title: "Sunny Out of Office",
    start: "2017-12-25",
    end: "2017-12-27"
  },
  {
    title: "event1",
    start: "2017-12-01",
    cssClass: "family"
  }
];
export default {
  name: "fullcalendar_r",
  data() {
    return {
      fcEvents: demoEvents,
      show_data: ""
    };
  },
  components: {
    fullcalendar
  },
  methods: {
    changeMonth(start, end, current) {
      console.log(start, end, current);
    },
    eventClick(event, jsEvent, pos) {
      this.show_data = event.title;
      console.log(event.title, event, jsEvent, pos);
    },
    dayClick(day, jsEvent) {
      this.show_data = day;
      console.log(day, jsEvent);
    },
    moreClick(day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent)
    }
  }
};
</script>
