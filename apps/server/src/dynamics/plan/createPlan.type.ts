import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  planSelectable,
  PLANTYPE,
  PLATETYPE,
  POSITION,
  PuFile,
  RPlan,
  UNITTYPE,
} from "../../schemas/mode.ts";
import { ObjectID } from "../../utils/deps.ts";
const v = new FastestValidator();

/**
 * this is a validator for create city
 * it validates the input object,
 * has two parts: {set,get}
 * the "get" object is used to specify what the user wants to return
 * the "set" object is used to validate the input value
 */

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          planType: { type: "enum", values: ["Resindental", "Villa"] },
          units: { type: "number", min: 1, max: 1000 },
          floors: { type: "number", min: 1, max: 1000 },
          sleeps: { type: "number", min: 1, max: 1000 },
          bathroom: { type: "number", min: 1, max: 1000 },
          planCode: { type: "string", min: 6, max: 10 },
          unitType: {
            type: "enum",
            values: ["Solo", "Duplex", "Triplex"],
          },
          exposure: {
            type: "enum",
            values: ["Northern", "Southern", "Eastern", "Western"],
          },
          infrastructureArea: { type: "tuple", items: ["number", "number"] },
          lenght: { type: "tuple", items: ["number", "number"] },
          width: { type: "tuple", items: ["number", "number"] },
          passageWidth: { type: "number", min: 1, max: 1000 },
          plateType: { type: "enum", values: ["Registered", "Normal"] },
          photo: {
            type: "object",
            props: {
              _id: { type: "objectID", ObjectID },
              filename: { type: "string" },
              type: { type: "string" },
              size: { type: "number" },
            },

            optional: true,
          },
          pdf: {
            type: "object",
            props: {
              _id: { type: "objectID", ObjectID },
              filename: { type: "string" },
              type: { type: "string" },
              size: { type: "number" },
            },

            optional: true,
          },
          slider: {
            type: "array",
            items: {
              type: "object",
              props: {
                _id: { type: "objectID", ObjectID },
                filename: { type: "string" },
                type: { type: "string" },
                size: { type: "number" },
              },

              optional: true,
            },
            optional: true,
          },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: planSelectable(2),
      },
    },
  },
};

export const checkCreatePlan = v.compile(schema);

/**
 * @interface
 * Represent Input details
 * this is input of city
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface ICreatePlanDetails {
  set: {
    planType: PLANTYPE;
    units: number;
    floors: number;
    sleeps: number;
    planCode: string;
    unitType: UNITTYPE;
    bathroom: number;
    exposure: POSITION;
    infrastructureArea: [number, number];
    lenght: [number, number];
    width: [number, number];
    passageWidth: number;
    plateType: PLATETYPE;
    photo: PuFile;
    pdf: PuFile;
    slider: PuFile[];
  };
  get: RPlan;
}
