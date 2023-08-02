/**
 * A weak map of endpoints and the number of calls made to them.
 */
export const numberOfCallsByEndpoint = new WeakMap();

/**
 * Increments the number of calls to an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * @param {{protocol: string, name: string}} endpoint - The endpoint to call.
 * @returns {string} The response from the endpoint.
 * @throws {Error} If the endpoint has been called more than 5 times.
 * @throws {TypeError} If the endpoint is not an object.
 * Tracks the number of calls made to an endpoint.
 */

export default function queryAPI(endpoint) {
  if (!numberOfCallsByEndpoint.has(endpoint)) {
    numberOfCallsByEndpoint.set(endpoint, 0);
  }
  numberOfCallsByEndpoint.set(endpoint, numberOfCallsByEndpoint.get(endpoint) + 1);
  if (numberOfCallsByEndpoint.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
