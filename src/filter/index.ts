import Vue from "vue";
import trim from "./trim";
import formaDate from "./formaDate";
import changeCase from "./changeCase";
import replaceStr from "./replaceStr";
import formatText from "./formatText";
import upDigit from "./upDigit";
Vue.filter("trim", trim);
Vue.filter("formaDate", formaDate);
Vue.filter("changeCase", changeCase);
Vue.filter("replaceStr", replaceStr);
Vue.filter("formatText", formatText);
Vue.filter("upDigit", upDigit);