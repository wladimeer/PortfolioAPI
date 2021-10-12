import { RequestHandler } from 'express';
import Project from '../models/Project';

const CreateProject: RequestHandler = async (request, response) => {
  try {
    const repository = request.body.repository;
    const projectFound = await Project.findOne({ repository });

    if (projectFound) {
      const message = 'El Repositorio Ya Se Encuentra Registrado';
      return response.status(301).json({ message });
    }

    const project = new Project(request.body);
    const projectSaved = await project.save();
    return response.json(projectSaved);
  } catch (error) {
    return response.json(error);
  }
};

const ReadProjects: RequestHandler = async (request, response) => {
  try {
    const projects = await Project.find();
    return response.json(projects);
  } catch (error) {
    return response.json(error);
  }
};

const UpdateProject: RequestHandler = async (request, response) => {
  try {
    const projectUpdated = await Project.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );

    if (!projectUpdated) {
      const message = 'El Proyecto Ingresado No Fue Encontrado';
      return response.status(204).json({ message });
    }

    return response.json(projectUpdated);
  } catch (error) {
    return response.json(error);
  }
};

const DeleteProject: RequestHandler = async (request, response) => {
  try {
    const projectDeleted = await Project.findByIdAndDelete(request.params.id);

    if (!projectDeleted) {
      const message = 'El Proyecto Ingresado No Fue Encontrado';
      return response.status(204).json({ message });
    }

    return response.json(projectDeleted);
  } catch (error) {
    return response.json(error);
  }
};

const FindProject: RequestHandler = async (request, response) => {
  try {
    const projectFound = await Project.findById(request.params.id);

    if (!projectFound) {
      const message = 'El Proyecto Ingresado No Fue Encontrado';
      return response.status(204).json();
    }

    return response.json(projectFound);
  } catch (error) {
    return response.json(error);
  }
};

export { CreateProject, ReadProjects, UpdateProject, DeleteProject, FindProject };
