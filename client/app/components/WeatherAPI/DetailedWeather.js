import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import imageDictionary from "./imageDictionary";
import { isSameDay, format } from "date-fns";
import TodaysDate from "../Calendar/TodaysDate";
import NumberToMonth from "../NumberToMonth";
