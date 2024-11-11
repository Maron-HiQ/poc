import { createErrorEvent } from "../events/ErrorEvent";
import { OrderEvent, isOrderEvent } from "../events/OrderEvent";

export const handler = async (event: OrderEvent) => {
  console.log("Function loaded sucessfully");

  if (!isOrderEvent(event)) {
    return createErrorEvent("Invalid Event");
  }

  try {
    const response = <OrderEvent>{
      order: event.order,
      message: `Order ${event.order} is being billed to customer ...`,
    };

    console.log("Returning response" + JSON.stringify(response));

    return response;
  } catch (error) {
    return createErrorEvent("Error creating response");
  }
};
