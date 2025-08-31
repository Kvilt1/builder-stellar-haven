# API Documentation

## Base URL
- **Development**: `http://localhost:5173`
- **Production**: Configured via Netlify deployment

## Endpoints

### Demo Endpoint

#### GET `/api/demo`
Returns a simple demo message from the Express server.

**Handler**: `server/routes/demo.ts:handleDemo`

**Response Type**: `DemoResponse`
```typescript
interface DemoResponse {
  message: string;
}
```

**Example Response**:
```json
{
  "message": "Hello from Express server"
}
```

**Status Codes**:
- `200 OK` - Successful response

**Usage Example**:
```typescript
// Client-side usage
const response = await fetch('/api/demo');
const data: DemoResponse = await response.json();
console.log(data.message); // "Hello from Express server"
```

---

## Shared Types

All API types are defined in `shared/api.ts` to ensure type safety between client and server.

### Available Types:
- `DemoResponse` - Response type for demo endpoint

## Server Configuration

### Express Server
- **Version**: Express 5.1.0
- **Entry Point**: `server/index.ts`
- **Build**: `server/node-build.ts`

### Route Organization
Routes are organized in `server/routes/` directory:
- Each route file exports handler functions
- Handlers use TypeScript `RequestHandler` type from Express
- Shared types imported from `shared/api.ts`

## Error Handling

Standard HTTP status codes are used:
- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## Development

### Adding New Endpoints

1. **Create Route Handler**: Add new file in `server/routes/`
```typescript
import { RequestHandler } from 'express';
import { MyResponse } from '../../shared/api';

export const handleMyEndpoint: RequestHandler = (req, res) => {
  const response: MyResponse = { /* ... */ };
  res.status(200).json(response);
};
```

2. **Define Types**: Add to `shared/api.ts`
```typescript
export interface MyResponse {
  // Response structure
}
```

3. **Register Route**: Update server routing configuration

### Testing API Endpoints

Run development server:
```bash
npm run dev
```

Test endpoint:
```bash
curl http://localhost:5173/api/demo
```

## Validation

Using Zod (v3.25.76) for schema validation:
- Request body validation
- Query parameter validation
- Response validation

## Environment Variables

Configuration via `.env` file using `dotenv`:
- API keys
- External service URLs
- Environment-specific settings