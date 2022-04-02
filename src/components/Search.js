import { Button, Card, CardBody, Input } from "reactstrap";

const Search = ({ searchForCity, searchTerm, setSearchTerm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    searchForCity();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card style={{ width: "80vw" }} outline color="dark">
        <CardBody className="d d-flex justify-content-around">
          <Input
            className="m-2 w-75"
            placeholder="Enter city name to search"
            name="cityName"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            color="success"
            outline
            className="fw-bold mw-auto"
            onClick={handleSubmit}
          >
            Get Weather
          </Button>
        </CardBody>
      </Card>
    </form>
  );
};

export default Search;
