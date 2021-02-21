import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'


function Add({ handleAdd }) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [rate, setRate] = useState('');

    const addMovie = () => {
        return (
            handleAdd({ title, posterUrl, description, rate }),
            setShow(false),
            setTitle(""),
            setDescription(""),
            setPosterUrl(""),
            setRate("")
        )
    }

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Add a Movie
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Movie
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label> Title</Form.Label>
                        <Form.Control placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image source</Form.Label>
                        <Form.Control placeholder="source" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label> Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        
                        <div className="stars">
                            <input class="star star-5" id="star-5" type="radio" value="5" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-5" for="star-5"></label>
                            <input class="star star-4" id="star-4" type="radio" value="4" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-4" for="star-4"></label>
                            <input class="star star-3" id="star-3" type="radio" value="3" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-3" for="star-3"></label>
                            <input class="star star-2" id="star-2" type="radio" value="2" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-2" for="star-2"></label>
                            <input class="star star-1" id="star-1" type="radio" value="1" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-1" for="star-1"></label>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mr-2" onClick={addMovie}>
                        Add Movie
                    </Button>
                    <Button variant="danger" onClick={() => setShow(false)}>
                        Cancel and Return
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Add